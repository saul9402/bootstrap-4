







$(document).ready(function () {
    $('#fecha').countdown('2019/08/23', function (evento) {
        $(this).html(evento.strftime('<span> %D </span> Dias <span> %H </span> Horas <span> %M </span> Minutos <span> %S </span> Segundos'));
    });
});