/* global hexo */
hexo.extend.filter.register('after_post_render', function (data) {
    var cfg = hexo.config.commentbox;
    if (cfg) {
        if (!hexo.config.commentbox.enable) {
            return;
        }

        if (!hexo.config.commentbox.project_id) {
            console.log('ERROR. project id is required for commentbox');
        }

        data.content += buildJS(cfg);
    };
});

function buildJS(cfg) {
    return `<!-- commentbox plugin begins -->
    <div class="commentbox"></div>
    <script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
    <script>commentBox('${cfg.project_id}')</script>
    <!-- commentbox plugin ends -->
    `
}