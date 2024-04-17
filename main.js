$(document).ready(function(){
  $('.heart-button').click(function(){
    $(this).toggleClass('clicked');
  });
  
  $('#nome').keyup(function() {
    let nome = $(this).val();
    nome = nome.replace(/[^a-zA-Z\s]/g, '');
    if (nome.length > 20) {
      nome = nome.slice(0, 30); // Limita o nome a 20 caracteres
    }
    $(this).val(nome);
  });

  $('#telefone').mask('(00)0000-0000');
  $('#email').mask(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  $('#forms').submit(function(e) {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    console.log("Formulário enviado"); // Verifica se a função está sendo chamada
    // Aqui você pode adicionar a lógica para enviar o formulário, por exemplo, usando AJAX
    // Limpar os valores dos campos do formulário
    $('#forms')[0].reset(); // Isso irá limpar todos os campos do formulário
    alert("Formulário enviado e campos limpos");
  });
});
