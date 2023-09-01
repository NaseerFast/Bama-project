import React from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import FileSaver from 'file-saver';
import { useRouter } from 'next/router';

const UserApplication = () => {
  const router = useRouter();

  // Sample user application data
  const userApplication = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: 'January 1, 1990',
    idNumber: '1234567890',
    address: '123 Main Street, City, Country',
    education: [
      {
        degree: 'Bachelor of Science',
        university: 'University Name',
        year: '2020',
      },
      {
        degree: 'Master of Arts',
        university: 'Another University',
        year: '2022',
      },
    ],
  };

  const handleDownload = async () => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Create a new page with A4 dimensions (595 x 842 points)
    const page = pdfDoc.addPage([595, 842]);

    // Set the font and text color
    page.setFont(helveticaFont);
    page.setFontSize(12);
    // page.setTextColor(rgb(0, 0, 0));

    // Add a title
    page.drawText('User Application Details', {
      x: 50,
      y: 800,
      size: 18,
    });

    // Personal Information Section
    page.drawText('Personal Information', {
      x: 50,
      y: 770,
      size: 16,
      color: rgb(0, 0, 1), // Blue color for section header
    });

    page.drawText('First Name:', {
      x: 50,
      y: 740,
      size: 14,
    });

    page.drawText(userApplication.firstName, {
      x: 200,
      y: 740,
      size: 14,
    });

    page.drawText('Last Name:', {
      x: 50,
      y: 720,
      size: 14,
    });

    page.drawText(userApplication.lastName, {
      x: 200,
      y: 720,
      size: 14,
    });

    page.drawText('Date of Birth:', {
      x: 50,
      y: 700,
      size: 14,
    });

    page.drawText(userApplication.dateOfBirth, {
      x: 200,
      y: 700,
      size: 14,
    });

    page.drawText('ID Number:', {
      x: 50,
      y: 680,
      size: 14,
    });

    page.drawText(userApplication.idNumber, {
      x: 200,
      y: 680,
      size: 14,
    });

    // Address Section
    page.drawText('Address', {
      x: 50,
      y: 640,
      size: 16,
      color: rgb(0, 0, 1), // Blue color for section header
    });

    page.drawText('Address:', {
      x: 50,
      y: 610,
      size: 14,
    });

    page.drawText(userApplication.address, {
      x: 200,
      y: 610,
      size: 14,
      maxWidth: 350, // Limit the width for address text
    });

    // Education Section
    page.drawText('Education', {
      x: 50,
      y: 580,
      size: 16,
      color: rgb(0, 0, 1), // Blue color for section header
    });

    let yPos = 550;
    userApplication.education.forEach((edu) => {
      page.drawText(`Degree: ${edu.degree}`, {
        x: 50,
        y: yPos,
        size: 14,
      });

      page.drawText(`University: ${edu.university}`, {
        x: 200,
        y: yPos,
        size: 14,
      });

      page.drawText(`Year: ${edu.year}`, {
        x: 450,
        y: yPos,
        size: 14,
      });

      yPos -= 30; // Adjust vertical position for the next education entry
    });

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Create a Blob from the PDF bytes
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Save the PDF Blob as a file using FileSaver
    FileSaver.saveAs(pdfBlob, 'user_application.pdf');

    // Navigate back to the user application page
    router.push('/user-application');
  };

  return (
    <div>
      <h1>User Application Details</h1>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default UserApplication;
