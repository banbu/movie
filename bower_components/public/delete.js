$(function(){
	$('.del').click(function (e) {
        if(window.confirm('你确定要删除吗？')){
            var target = $(e.target);
            var id = target.data('id');
            var tr = $('.item-id-'+id);
            $.ajax({
	            type: 'get',
	            url: "list/" +id
        	})
            .done(function (results) {
	            if (results.success === 1) {
	                if (tr.length > 0) {
	                    tr.remove()
	                }
	            }
	        })
            return true;
        }
        else{
            return false;
        }
    });
})