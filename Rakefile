ROOT_DIR = File.dirname(__FILE__)
DRAFTS_DIR = File.expand_path('content/blog/drafts', ROOT_DIR)
POSTS_DIR = File.expand_path('content/blog/posts', ROOT_DIR)

DRAFT_TEMPLATE = <<-EOS
---
title: %{title}
created_at: %{created_at}
---

This paragraph will be used as an excerpt.

Start writing.
EOS

require 'pry-byebug'
require 'time'

def slugify(s)
  # 1. Convert all letters to lowercase
  # 2. Convert spaces to hyphens
  # 3. Remove unwanted characters
  s.downcase
   .gsub(/\s+/, '-')
   .gsub(/[^a-z0-9\-_]/, '')
end

desc 'Create a draft post'
task :make_draft, [:title] do |t, args|
  args.with_defaults(title: 'Untitled')

  filename = slugify(args.title) + '.md'
  path = File.join(DRAFTS_DIR, filename)
  created_at = Time.now.utc.iso8601
  contents = DRAFT_TEMPLATE % { title: args.title, created_at: created_at }

  File.write(path, contents)

  puts "Open '#{path}'"
  puts "and start writing your masterpiece..."
end

desc 'Publish a draft post'
task :publish, [:slug] do |t, args|
  args.with_defaults(slug: '')

  paths = Dir[DRAFTS_DIR + '/*.md'].select do |path|
    path =~ %r{/#{args.slug}[^./]*\.md\Z}
  end

  if paths.size == 1
    path = paths.first
    contents = File.read(path)

    pattern = /^(created_at: .+)$/
    if contents =~ pattern
      timestamp = Time.now.utc
      published_at = timestamp.iso8601
      new_contents = contents.sub(pattern, "\\1\npublished_at: #{published_at}")

      year = timestamp.year
      month = timestamp.month
      day = timestamp.day
      dest_dir = File.join(POSTS_DIR, year.to_s, '%02d' % month, '%02d' % day)
      mkdir_p(dest_dir)

      filename = File.basename(path)
      new_path = File.join(dest_dir, filename)

      File.write(new_path, new_contents)
      rm([path])

      puts "The draft post '#{filename}' has been published at '#{new_path}'."
    else
      filename = File.basename(paths.first)
      puts "The selected draft post '#{filename}' does not have a 'created_at' timestamp."
    end
  else
    puts 'No unique draft post exists. Please try again with a different slug.'
  end
end

desc 'Remove unnecessary files and directories'
task :clean do
  paths = %w(output tmp crash.log).map do |name|
    File.expand_path(name, ROOT_DIR)
  end
  rm_rf paths
end
