require 'commonmarker'

class CommonMarkerFilter < Nanoc::Filter
  identifier :commonmarker

  def run(content, params = {})
    CommonMarker.render_html(content, params.fetch(:options, :default))
  end
end
