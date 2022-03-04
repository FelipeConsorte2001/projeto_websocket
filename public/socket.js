let socket = io();
$('#textArea').keyup( event => {
    menssage = $('#textArea').val()
    let messageObject = {
        message: menssage,
    }
    socket.emit('sendMessage', messageObject)
});

socket.on('receiveMessage', menssage => {
    $('#preview').html(menssage.markdow)
    $('#textArea').val(menssage.texto_normal)
});

socket.on('output-messages', menssage => {
    if(menssage){
        $('#textArea').val(menssage.texto_normal)
        $('#preview').html(menssage.markdow)
    }else{
        $('#textArea').text("")
        $('#preview').text("")
    }
});

function gerar_pdf(){
    let dados = $('#preview').html()

    let pdf = window.open('','','');
    pdf.document.write('<html><head>');
    pdf.document.write('<title>PDF</title></head>');
    pdf.document.write('<body>');
    pdf.document.write(dados);
    pdf.document.write('</body></html>');
    pdf.document.close();
    pdf.print();
}