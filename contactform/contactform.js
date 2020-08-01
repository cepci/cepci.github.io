$('.submeter').on('click', function() {
    event.preventDefault();
    var nome = $('#name').val();
    var email = $('#email').val();
    var assunto = $('#subject').val();
    var mensagem = $('#message').val();

    window.location = 'mailto:info@cepci.org.mz?subject=' + assunto + '&body=' + 'Ola! %0D%0A %0D%0A Meu nome é ' + nome + ' ('+ email + '). %0D%0A %0D%0A' +   mensagem;
});