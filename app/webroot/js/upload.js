$(document).ready(function() {
        $('.myupload').on('change', function() {
            var webroot = $('input[name*=webroot]').val();
            var phpUrl = $(this).attr('data-url');
            var imgKey = $(this).attr('data-key');
            var fd = new FormData();
            var previewDiv = $(this).parent();
            if ($(this).val() !== '') {
                fd.append("file", $(this).prop("files")[0]);
            }
            var postData = {
                type : "POST",
                dataType : "JSON",
                data : fd,
                processData : false,
                contentType : false
            };
			console.log(phpUrl);
            $.ajax(
                phpUrl, postData
            ).done(function( data ){
                if (! data.error) {
                    $('#Bimage' + imgKey + 'ImgName').val(data.img_name);
                    $('#Bimage' + imgKey + 'ImgDir').val(data.img_dir);
                    $('#Bimage' + imgKey + 'TempImg').val(data.temp_img);
                    $('#Bimage' + imgKey + 'TempImgM').val(data.temp_img_m);
                    $('#Bimage' + imgKey + 'TempImgS').val(data.temp_img_s);

                    var previewImg = '<div class="delete">' + 
                        '<a href="#" class="mydelete" data-key="' + imgKey + '" data-url="' + webroot + 'uploads/del/bimage">' + 
                        '<img src="' + webroot + 'images/close-btn-s.png" alt=""></a></div>' +
                        '<img src="' + webroot + "files/tempimage/" + data.img_name + '" alt="" class="myThumb">';

                    previewDiv.prepend(previewImg).find('span').remove();
                    if ($('.file').index(previewDiv) == '0') {
                        $('.mainimage').attr('src', webroot + "files/tempimage/" + data.img_name);
                    }
                }
            });
        });


    $('.file').on('click', ".mydelete", function(e) {
        e.preventDefault();
        removeThumb($(this));
    });

    $('.mydelete').on('click', function(e) {
        e.preventDefault();
        removeThumb($(this));
    });

});

function removeThumb(myDelete) {
            var webroot = $('input[name*=webroot]').val();
            var phpUrl = myDelete.attr('data-url');
            var imgKey = myDelete.attr('data-key');
            var previewDiv = myDelete.parent().parent();

            var img_name = $('#Bimage' + imgKey + 'ImgName');
            var img_dir = $('#Bimage' + imgKey + 'ImgDir');
            var org_name = $('#Bimage' + imgKey + 'OrgName');
            var org_dir = $('#Bimage' + imgKey + 'OrgDir');
            var temp_img = $('#Bimage' + imgKey + 'TempImg');
            var temp_img_m = $('#Bimage' + imgKey + 'TempImgM');
            var temp_img_s = $('#Bimage' + imgKey + 'TempImgS');

            if (temp_img.val() && img_name.val()) {
                if (org_name.val()) {
                    img_name.val(org_name.val());
                    img_dir.val(org_dir.val());
                    temp_img.val('');
                    temp_img_m.val('');
                    temp_img_s.val('');
                    $('#preview' + imgKey).attr('src', webroot + "files/" + org_dir.val() + "/" + org_name.val());
                } else {
                    img_name.val('');
                    img_dir.val('');
                    temp_img.val('');
                    temp_img_m.val('');
                    temp_img_s.val('');
                    previewDiv.find('.delete').remove();
                    previewDiv.find('img').remove();
                    previewDiv.prepend('<span>画像登録</span>');
                    if ($('.file').index(previewDiv) == '0') {
                        $('.mainimage').attr('src', "");
                    }
                }
            } else if (!temp_img.val() && org_name.val()) {
                img_name.val('');
                img_dir.val('');
                previewDiv.find('.delete').remove();
                previewDiv.find('img').remove();
                previewDiv.prepend('<span>画像登録</span>');
                if ($('.file').index(previewDiv) == '0') {
                    $('.mainimage').attr('src', "");
                }
            }
}

