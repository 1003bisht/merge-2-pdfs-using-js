// merge.cjs
const path = require('path');

const mergepdfs = async (path1, path2) => {
    // Dynamically import the PDFMerger
    const { default: PDFMerger } = await import('pdf-merger-js');

    const merger = new PDFMerger();
    await merger.add("1.pdf");
    await merger.add("2.pdf");
    await merger.save(path.join(__dirname, 'public', 'merged.pdf')); // Adjust the output path as needed
};

// Export the mergepdfs function
module.exports = mergepdfs;
