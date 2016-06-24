def development?
  environment == 'development'
end

def production?
  environment == 'production'
end

def environment
  @_environment ||= ENV['NANOC_ENV'] || @config[:environment] || 'development'
end
