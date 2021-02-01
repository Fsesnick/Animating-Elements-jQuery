/*
$('#flashMessage').hide();
//$('#flashMessage').fadeIn(1000);
$('#flashMessage').slideDown(1000);
$('#flashMessage').delay(3000);
$('#flashMessage').slideUp();
*/

//$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();

$('#flashMessage')
  .hide()
  .slideDown(1000)
  .delay(3000)
  .slideUp();

const title = " Minha primeira postagem do blog. ";
const content = "Este é meu primeiro post'";

$('#blogTitlePreview').text(title);
$('#blogContentPreview').text(content);