import { useEffect, useState } from "react";
import { Table, Button, Tag, Space, Modal, Typography, message } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import bookingApi from "../../services/api-booking";

const { Title, Text } = Typography;

interface User {
  id: number;
  name: string;
}

interface Booking {
  id: number;
  user: User;
  status: "PENDING" | "COMPLETED" | "FAILED";
  total_price: number | null;
  createdAt: string;
  updatedAt: string | null;
  createdBy: string;
  updatedBy: string | null;
}

const SIZE = 10;

const statusTag = (status: string) => {
  if (status === "COMPLETED") return <Tag color="green">COMPLETED</Tag>;
  if (status === "FAILED") return <Tag color="red">FAILED</Tag>;
  return <Tag color="gold">PENDING</Tag>;
};

const BookingManagement: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selected, setSelected] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await bookingApi.getAllBooking(currentPage - 1, SIZE);
      setBookings(res.data.data);
      setTotalPages(res.data.meta?.totalPages || 1);
    } catch {
      message.error("Lỗi tải danh sách booking");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [currentPage]);

  const columns = [
    {
      title: "Booking",
      key: "booking",
      render: (_: unknown, record: Booking) => (
        <Space>
          <ShoppingCartOutlined style={{ color: "#1677ff" }} />
          <div>
            <div style={{ fontWeight: 600 }}>#{record.id}</div>
            <Text type="secondary">{record.createdAt}</Text>
          </div>
        </Space>
      ),
    },
    {
      title: "User",
      key: "user",
      render: (_: unknown, record: Booking) => (
        <div>
          <div style={{ fontWeight: 600 }}>{record.user?.name || "N/A"}</div>
          <Text type="secondary">ID: {record.user?.id}</Text>
        </div>
      ),
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (status: string) => statusTag(status),
    },
    {
      title: "Total",
      dataIndex: "total_price",
      key: "total_price",
      width: 150,
      render: (value: number | null) =>
        value !== null ? `${value.toLocaleString()}₫` : "—",
    },
    {
      title: "Action",
      key: "action",
      width: 120,
      render: (_: unknown, record: Booking) => (
        <Button
          type="text"
          icon={<EyeOutlined />}
          onClick={() => setSelected(record)}
        >
          Details
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <div>
          <Title level={3} style={{ marginBottom: 0 }}>
            Bookings
          </Title>
          <Text type="secondary">Track reservations and payments</Text>
        </div>
      </div>

      {/* TABLE */}
      <Table
        rowKey="id"
        loading={loading}
        dataSource={bookings}
        columns={columns}
        pagination={false}
        bordered
      />

      {/* PAGINATION */}
      <div style={{ marginTop: 16, textAlign: "right" }}>
        <Space>
          <Button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </Button>

          <Text>
            Page {currentPage} / {totalPages}
          </Text>

          <Button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </Button>
        </Space>
      </div>

      {/* MODAL BOOKING DETAILS */}
      <Modal
        open={!!selected}
        onCancel={() => setSelected(null)}
        footer={[
          <Button key="close" onClick={() => setSelected(null)}>
            Close
          </Button>,
        ]}
        title={`Booking Details #${selected?.id}`}
        destroyOnClose
      >
        {selected && (
          <Space direction="vertical" style={{ width: "100%" }} size="middle">
            <div>
              <Text type="secondary">User</Text>
              <div style={{ fontWeight: 500 }}>
                {selected.user?.name || "N/A"} (ID: {selected.user?.id})
              </div>
            </div>

            <div>
              <Text type="secondary">Created By</Text>
              <div>{selected.createdBy}</div>
            </div>

            <div>
              <Text type="secondary">Status</Text>
              <div>{statusTag(selected.status)}</div>
            </div>

            <div>
              <Text type="secondary">Total</Text>
              <div style={{ fontWeight: 500, fontSize: 16 }}>
                {selected.total_price !== null
                  ? `${selected.total_price.toLocaleString()}₫`
                  : "—"}
              </div>
            </div>

            <div>
              <Text type="secondary">Created At</Text>
              <div>{selected.createdAt}</div>
            </div>

            {selected.updatedAt && (
              <div>
                <Text type="secondary">Updated At</Text>
                <div>{selected.updatedAt}</div>
              </div>
            )}

            {selected.updatedBy && (
              <div>
                <Text type="secondary">Updated By</Text>
                <div>{selected.updatedBy}</div>
              </div>
            )}
          </Space>
        )}
      </Modal>
    </div>
  );
};

export default BookingManagement;
