const button = document.querySelector('#generate-pdf');
console.log(button)
button.addEventListener('click', () => {
    const content = document.querySelector('#content');
    console.log(content)
    const options = {
        margin: [10, 10, 10, 10],
        fileName: 'test.pdf',
        html2canvas: {
            scale: 2,
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait',
        }
    }
    console.log(options)
    html2pdf().set(options).from(content).save();
})