require 'digest/md5'

def gravatar(email, size, description)
  hash = Digest::MD5.hexdigest(email)
  src = "https://www.gravatar.com/avatar/#{hash}?s=#{size}"
  %Q{<img src="#{src}" alt="#{description}" title="#{description}">}
end
