$(function() {
    var layer = layui.layer
    var laypage = layui.laypage
    var q = {
        pagenum: 1,
        pagesize: 2,
        cate_id: '',
        state: ''
    }
    initTable()
        // 获取文章列表数据的方法
    function initTable() {
        $.ajax({
            method: 'GET',
            url: '/my/article/list',
            data: q,
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('获取文章列表失败！')
                }
                // 使用模板引擎来渲染页面的数据
                var htmlStr = template('tpl-table', res)
                $('tbody').html(htmlStr)
                    // console.log(1);
                console.log(res);
            }
        })
    }
    renderPage()

    function renderPage(total) {
        // console.log(total);
        laypage.render({
            elem: 'pageBox',
            count: 20,
            limit: q.pagesize,
            curr: q.pagenum
        })
    }
})