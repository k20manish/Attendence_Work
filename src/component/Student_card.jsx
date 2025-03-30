import StudentCard from "../StudentCard";
import { PDFDownloadLink } from "@react-pdf/renderer";
import StudentPDF from "./StudentPDF"; // ✅ Import the PDF Component

function Student_card() {
  const students = [
    {
      reg_no: "1234",
      name: "abc",
      time1: "10 AM",
      time2: "6 PM",
      photo1: "./public/images.jpeg",
      photo2: "https://firebasestorage.googleapis.com/v0...",
    },
    {
      reg_no: "5678",
      name: "xyz",
      time1: "11 AM",
      time2: "7 PM",
      photo1: "https://firebasestorage.googleapis.com/v0...",
      photo2: "https://firebasestorage.googleapis.com/v0...",
    },
    {
      "reg_no": "1001",
      "name": "Alice Johnson",
      "time1": "9:00 AM",
      "time2": "5:00 PM",
      "photo1": "https://randomuser.me/api/portraits/women/1.jpg",
      "photo2": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      "reg_no": "1002",
      "name": "Bob Smith",
      "time1": "10:00 AM",
      "time2": "6:00 PM",
      "photo1": "https://randomuser.me/api/portraits/men/1.jpg",
      "photo2": "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      "reg_no": "1003",
      "name": "Charlie Brown",
      "time1": "8:30 AM",
      "time2": "4:30 PM",
      "photo1": "https://randomuser.me/api/portraits/men/3.jpg",
      "photo2": "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      "reg_no": "1004",
      "name": "David Wilson",
      "time1": "11:00 AM",
      "time2": "7:00 PM",
      "photo1": "https://randomuser.me/api/portraits/men/5.jpg",
      "photo2": "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      "reg_no": "1005",
      "name": "Emily Davis",
      "time1": "9:30 AM",
      "time2": "5:30 PM",
      "photo1": "https://randomuser.me/api/portraits/women/3.jpg",
      "photo2": "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      "reg_no": "1006",
      "name": "Frank Thompson",
      "time1": "10:15 AM",
      "time2": "6:15 PM",
      "photo1": "https://randomuser.me/api/portraits/men/7.jpg",
      "photo2": "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      "reg_no": "1007",
      "name": "Grace Lee",
      "time1": "8:00 AM",
      "time2": "4:00 PM",
      "photo1": "https://randomuser.me/api/portraits/women/5.jpg",
      "photo2": "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      "reg_no": "1008",
      "name": "Henry White",
      "time1": "12:00 PM",
      "time2": "8:00 PM",
      "photo1": "https://randomuser.me/api/portraits/men/9.jpg",
      "photo2": "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      "reg_no": "1009",
      "name": "Isabella Martinez",
      "time1": "7:45 AM",
      "time2": "3:45 PM",
      "photo1": "https://randomuser.me/api/portraits/women/7.jpg",
      "photo2": "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
      "reg_no": "1010",
      "name": "Jack Taylor",
      "time1": "9:45 AM",
      "time2": "5:45 PM",
      "photo1": "https://randomuser.me/api/portraits/men/11.jpg",
      "photo2": "https://randomuser.me/api/portraits/men/12.jpg"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-4">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-6 rounded-md shadow-lg flex flex-col items-center">
        <h1 className="text-4xl font-bold tracking-wide">BLUY</h1>
        <p className="text-lg mt-2">Attendance Sheet - 28/03/2025</p>

        {/* PDF Download Button */}
        <PDFDownloadLink
          document={<StudentPDF students={students} />}
          fileName="attendance_sheet.pdf"
          className="mt-4 bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
        </PDFDownloadLink>
      </div>

      {/* Student Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  );
}

export default Student_card;
