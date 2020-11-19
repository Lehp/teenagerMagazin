// $(document).ready(function() {
//     $("#more").click(function() {
//         $('html, body').animate({
//             scrollTop: $('#test').offset().top
//         },1000);
//     });
// });

const openMail = function(prename, name, street, place, plz, amount, tel) {
    const body = "Vorname: " + prename + " Name: " + name + " Strasse: " + street + " Ort: " + place + " PLZ: " + plz + " Stückzahl: "+ amount + " Tel-NR: " + tel ;
    window.open("mailto:r.lehmann@bluewin.ch?subject=Teenagermagazin Bestellung&body=" + body)
};