require 'digest/md5'

def gravatar(email, size, attrs = {})
  hash = Digest::MD5.hexdigest(email)
  src = "https://www.gravatar.com/avatar/#{hash}?s=#{size}"

  attrs = attrs.merge({ src: src })
    .collect { |k, v| %Q{#{k}="#{v}"} }
    .join(' ')

  "<img #{attrs}>"
end
