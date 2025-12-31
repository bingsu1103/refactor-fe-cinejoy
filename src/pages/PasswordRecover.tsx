import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../store/useAuth";
import userApi from "../services/api-user";
import authApi from "../services/api-auth";

// Password strength levels
type PasswordStrength = "weak" | "medium" | "strong" | "very-strong";

interface PasswordStrengthInfo {
  level: PasswordStrength;
  label: string;
  percentage: number;
  color: string;
}

const PasswordRecover: React.FC = () => {
  const { user, authenticated, isLoading: authLoading, clearUser } = useAuth();
  const navigate = useNavigate();

  // Form states
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Visibility states
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // UI states
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Redirect if not authenticated (only after loading is complete)
  useEffect(() => {
    if (!authLoading && (!authenticated || !user)) {
      navigate("/login");
    }
  }, [authLoading, authenticated, user, navigate]);

  // Calculate password strength
  const passwordStrength = useMemo((): PasswordStrengthInfo => {
    if (!newPassword) {
      return {
        level: "weak",
        label: "Yếu",
        percentage: 0,
        color: "bg-red-500",
      };
    }

    let score = 0;

    // Length check
    if (newPassword.length >= 8) score += 1;
    if (newPassword.length >= 12) score += 1;

    // Character variety checks
    if (/[a-z]/.test(newPassword)) score += 1;
    if (/[A-Z]/.test(newPassword)) score += 1;
    if (/[0-9]/.test(newPassword)) score += 1;
    if (/[^a-zA-Z0-9]/.test(newPassword)) score += 1;

    if (score <= 2) {
      return {
        level: "weak",
        label: "Yếu",
        percentage: 25,
        color: "bg-red-500",
      };
    } else if (score <= 4) {
      return {
        level: "medium",
        label: "Trung bình",
        percentage: 50,
        color: "bg-yellow-500",
      };
    } else if (score <= 5) {
      return {
        level: "strong",
        label: "Mạnh",
        percentage: 75,
        color: "bg-green-500",
      };
    } else {
      return {
        level: "very-strong",
        label: "Rất mạnh",
        percentage: 100,
        color: "bg-emerald-500",
      };
    }
  }, [newPassword]);

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!currentPassword) {
      newErrors.currentPassword = "Vui lòng nhập mật khẩu hiện tại";
    }

    if (!newPassword) {
      newErrors.newPassword = "Vui lòng nhập mật khẩu mới";
    } else if (newPassword.length < 8) {
      newErrors.newPassword = "Mật khẩu phải có ít nhất 8 ký tự";
    } else if (!/[A-Z]/.test(newPassword)) {
      newErrors.newPassword = "Mật khẩu phải có ít nhất 1 chữ hoa";
    } else if (!/[0-9]/.test(newPassword)) {
      newErrors.newPassword = "Mật khẩu phải có ít nhất 1 số";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu mới";
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Call change password API
      await userApi.changePassword(currentPassword, newPassword);

      // Logout immediately after success
      try {
        await authApi.logout();
      } catch (err) {
        console.error("Logout error:", err);
      }
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      clearUser();

      // Show success popup (user is already logged out)
      setShowSuccessPopup(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      console.error("Change password error:", error);
      const errorMessage =
        error?.message || "Có lỗi xảy ra. Vui lòng thử lại sau.";
      setMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle redirect to login (user is already logged out)
  const handleRedirectToLogin = () => {
    navigate("/login");
  };

  // Handle cancel
  const handleCancel = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setErrors({});
    setMessage(null);
    navigate(-1);
  };

  // Show loading state while checking authentication
  if (authLoading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-64px)] bg-background-dark">
        <div className="flex flex-col items-center gap-4">
          <svg
            className="animate-spin h-12 w-12 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="text-[#c9929b] text-sm">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!authenticated || !user) {
    return null;
  }

  return (
    <main className="flex-1 flex justify-center py-10 px-4 sm:px-10">
      <div className="flex flex-col max-w-[600px] flex-1 gap-6">
        {/* Heading */}
        <div className="flex flex-col gap-2 p-4 border-b border-[#482329] pb-6">
          <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
            Đổi mật khẩu
          </h1>
          <p className="text-[#c9929b] text-base font-normal leading-normal">
            Để bảo mật tài khoản, vui lòng sử dụng mật khẩu mạnh và không chia
            sẻ cho người khác.
          </p>
        </div>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`mx-4 p-4 rounded-lg flex items-center gap-3 ${
              message.type === "success"
                ? "bg-green-500/10 border border-green-500/30 text-green-400"
                : "bg-red-500/10 border border-red-500/30 text-red-400"
            }`}
          >
            <span className="material-symbols-outlined">
              {message.type === "success" ? "check_circle" : "error"}
            </span>
            <span className="text-sm">{message.text}</span>
          </div>
        )}

        {/* Form */}
        <form className="flex flex-col gap-6 p-4" onSubmit={handleSubmit}>
          {/* Current Password */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-base font-medium leading-normal">
              Mật khẩu hiện tại
            </label>
            <div
              className={`flex w-full items-stretch rounded-lg group focus-within:ring-2 ring-primary/50 transition-all ${
                errors.currentPassword ? "ring-2 ring-red-500/50" : ""
              }`}
            >
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                  if (errors.currentPassword) {
                    setErrors((prev) => ({ ...prev, currentPassword: "" }));
                  }
                }}
                className="form-input flex-1 rounded-l-lg text-white focus:outline-0 focus:ring-0 border border-[#67323b] bg-[#33191e] focus:border-primary h-12 placeholder:text-[#c9929b] px-4 text-base font-normal leading-normal border-r-0"
                placeholder="Nhập mật khẩu hiện tại"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="text-[#c9929b] hover:text-white transition-colors flex border border-[#67323b] bg-[#33191e] items-center justify-center px-4 rounded-r-lg border-l-0 focus:outline-none"
              >
                <span className="material-symbols-outlined">
                  {showCurrentPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
            {errors.currentPassword && (
              <span className="text-red-400 text-xs">
                {errors.currentPassword}
              </span>
            )}
          </div>

          {/* New Password */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-base font-medium leading-normal">
              Mật khẩu mới
            </label>
            <div
              className={`flex w-full items-stretch rounded-lg group focus-within:ring-2 ring-primary/50 transition-all ${
                errors.newPassword ? "ring-2 ring-red-500/50" : ""
              }`}
            >
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  if (errors.newPassword) {
                    setErrors((prev) => ({ ...prev, newPassword: "" }));
                  }
                }}
                className="form-input flex-1 rounded-l-lg text-white focus:outline-0 focus:ring-0 border border-[#67323b] bg-[#33191e] focus:border-primary h-12 placeholder:text-[#c9929b] px-4 text-base font-normal leading-normal border-r-0"
                placeholder="Nhập mật khẩu mới"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="text-[#c9929b] hover:text-white transition-colors flex border border-[#67323b] bg-[#33191e] items-center justify-center px-4 rounded-r-lg border-l-0 focus:outline-none"
              >
                <span className="material-symbols-outlined">
                  {showNewPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
            {errors.newPassword && (
              <span className="text-red-400 text-xs">{errors.newPassword}</span>
            )}

            {/* Password Strength */}
            {newPassword && (
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#c9929b] text-xs font-medium">
                    Độ mạnh mật khẩu
                  </span>
                  <span className="text-white text-xs font-medium">
                    {passwordStrength.label}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-[#67323b] rounded-full overflow-hidden">
                  <div
                    className={`h-full ${passwordStrength.color} rounded-full transition-all duration-300`}
                    style={{ width: `${passwordStrength.percentage}%` }}
                  ></div>
                </div>
                <p className="text-[#c9929b] text-xs mt-1">
                  Mật khẩu nên có ít nhất 8 ký tự, bao gồm chữ hoa, số và ký tự
                  đặc biệt.
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-base font-medium leading-normal">
              Xác nhận mật khẩu mới
            </label>
            <div
              className={`flex w-full items-stretch rounded-lg group focus-within:ring-2 ring-primary/50 transition-all ${
                errors.confirmPassword ? "ring-2 ring-red-500/50" : ""
              }`}
            >
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errors.confirmPassword) {
                    setErrors((prev) => ({ ...prev, confirmPassword: "" }));
                  }
                }}
                className="form-input flex-1 rounded-l-lg text-white focus:outline-0 focus:ring-0 border border-[#67323b] bg-[#33191e] focus:border-primary h-12 placeholder:text-[#c9929b] px-4 text-base font-normal leading-normal border-r-0"
                placeholder="Nhập lại mật khẩu mới"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-[#c9929b] hover:text-white transition-colors flex border border-[#67323b] bg-[#33191e] items-center justify-center px-4 rounded-r-lg border-l-0 focus:outline-none"
              >
                <span className="material-symbols-outlined">
                  {showConfirmPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="text-red-400 text-xs">
                {errors.confirmPassword}
              </span>
            )}
            {/* Password match indicator */}
            {confirmPassword &&
              newPassword &&
              confirmPassword === newPassword && (
                <span className="text-green-400 text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Mật khẩu khớp
                </span>
              )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 mt-6 pt-4 border-t border-[#482329]">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2.5 rounded-lg text-white font-medium hover:bg-[#482329] transition-colors text-sm"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2.5 rounded-lg bg-primary hover:bg-red-600 text-white font-bold shadow-lg shadow-primary/20 transition-all text-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Đang xử lý...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">
                    check
                  </span>
                  <span>Cập nhật mật khẩu</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2f161a] rounded-2xl border border-[#482329] p-8 max-w-md w-full text-center shadow-2xl">
            <div className="size-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-green-400 text-[48px]">
                check_circle
              </span>
            </div>
            <h2 className="text-white text-2xl font-bold mb-3">
              Đổi mật khẩu thành công!
            </h2>
            <p className="text-[#c9929b] mb-8">
              Mật khẩu của bạn đã được thay đổi. Vui lòng đăng nhập lại với mật
              khẩu mới.
            </p>
            <button
              onClick={handleRedirectToLogin}
              className="w-full py-3 rounded-lg bg-primary hover:bg-red-600 text-white font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">login</span>
              Đăng nhập lại
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default PasswordRecover;
