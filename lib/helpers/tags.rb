def time_tag(timestamp)
  day = ordinalize(timestamp.day)
  formatted_timestamp = timestamp.strftime("%B #{day}, %Y")
  %Q{<time datetime="#{timestamp}">#{formatted_timestamp}</time>}
end

def ordinalize(n)
  "#{n}#{ordinal(n)}"
end

def ordinal(n)
  if (11..13).include?(n % 100)
    'th'
  else
    case n % 10
      when 1; 'st'
      when 2; 'nd'
      when 3; 'rd'
      else    'th'
    end
  end
end
