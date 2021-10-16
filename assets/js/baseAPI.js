$.ajaxPrefilter(function(options) {
    // console.log(options);
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
        // console.log(options.url);
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }

    options.complete = function(res) {
        // console.log('执行了complete回调');
        // console.log(res);
        // console.log(res.responseJSON);
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            localStorage.removeItem('token');
            location.href = '/login.html'
        }

    }
})


// 卡片代码
//    <div class="layui-card">
//         <div class="layui-card-header">
//             卡片面板
//         </div>
//         <div class="layui-card-body">
//             主体
//         </div>
//     </div>