// // 
// $(function(){
// 	$("button").click(function(){
// 		var _id = $("input[name = 'id']").val();
// 		var updateAt = new Date();
// 		var year = updateAt.getFullYear();
//         var month = updateAt.getMonth() + 1;
//         var day = updateAt.getDate();
// 		var params = year + '/' + month + '/' + day;
// 		$.ajax({
// 			type: 'post',
// 			url: '/admin/movie/new',
// 			data: params
// 		})
// 		.done(function(msg){
// 			if (msg.success === 0) {
//                 alert("更新失败!");
//             }
//             if (msg.success === 1) {
//                 alert("更新成功!");
//             }
//             if (msg.success === 2) {
//                 alert("添加失败!");
//             }
//             if (msg.success === 3) {
//                 alert("添加成功!");
//             }
// 		})
// 	})
// })