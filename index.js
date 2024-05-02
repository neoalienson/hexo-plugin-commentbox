/* global hexo */
hexo.extend.filter.register('after_post_render', function (data) {
    const { config } = this;
    if (config) {
        if (!config.commentbox.enable) {
            return;
        }

        if (!config.commentbox.project_id) {
            console.log('ERROR. project id is required for commentbox');
        }

        if (!data.comments) {
            // comment is disabled
            return;
        }

        data.content += buildJS(config.commentbox);
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