/*$('#flashMessage')
  .hide()
  .slideDown(1000)
  .delay(3000)
  .slideUp();

const title = " Minha primeira postagem do blog. ";
const content = "Este é meu <strong>primeiro</strong> post";

$('#blogTitlePreview').text(title);
$('#blogContentPreview').html(content);
*/

$('#previewButton').click(function(){
  const title = $('#blogTitleInput').val();
  //console.log(title);
  const content = $('#blogContentInput').val();
                    
   $('#blogTitlePreview').text(title); 
   $('#blogContentPreview').html(content);
});