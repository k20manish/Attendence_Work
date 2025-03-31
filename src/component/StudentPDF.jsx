import React from "react";
import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";

// ✅ Define Styles for PDF
const styles = StyleSheet.create({
  page: { padding: 20, flexDirection: "column", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 10 },
  grid: { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  studentCard: {
    width: "30%", // ✅ Ensures 3 cards per row
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    border: "1px solid #ccc",
    textAlign: "center",
  },
  studentName: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  studentReg: { fontSize: 12, marginBottom: 5 },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 5 },
  image: { width: 60, height: 60, borderRadius: 5 },
  studentTime: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#e3e3e3",
    borderRadius: 5,
    padding: 3,
    width: 60,
    marginTop: 4,
  },
});

// ✅ Function to split students into groups of 12 per page
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

// ✅ PDF Component with Photo & Time in Same Row
const StudentPDF = ({ students }) => {
  const pages = chunkArray(students, 12); // 12 per page

  return (
    <Document>
      {pages.map((pageStudents, pageIndex) => (
        <Page key={pageIndex} size="A4" style={styles.page}>
          <Text style={styles.title}>Attendance Sheet</Text>
          <Text style={styles.subtitle}>28/03/2025</Text>

          <View style={styles.grid}>
            {pageStudents.map((student, index) => (
              <View key={index} style={styles.studentCard}>
                <Text style={styles.studentName}>{student.name}</Text>
                <Text style={styles.studentReg}>Reg No: {student.reg_no}</Text>

                {/* ✅ Photo & Time in Same Row */}
                <View style={styles.row}>
                  <View>
                    <Image style={styles.image} src={student.photo1} />
                    <Text style={styles.studentTime}>{student.time1}</Text>
                  </View>

                  <View>
                    <Image style={styles.image} src={student.photo2} />
                    <Text style={styles.studentTime}>{student.time2}</Text>
                  </View>
                </View>

              </View>
            ))} 
          </View>
        </Page>
      ))}
    </Document>
  );
};

export default StudentPDF;
