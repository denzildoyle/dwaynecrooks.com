# Returns all published posts sorted by most recent to least recent
def sorted_posts
  @items.find_all(%r{\A/blog/posts})
        .sort_by { |post| post[:published_at] }
        .reverse
end

# Returns all draft posts sorted by most recent to least recent
def sorted_drafts
  @items.find_all(%r{\A/blog/drafts})
        .sort_by { |post| post[:created_at] }
        .reverse
end

def excerpt(post)
  post.compiled_content(snapshot: :pre)
      .split('</p>')
      .first
      .sub('<p>', '')
end
