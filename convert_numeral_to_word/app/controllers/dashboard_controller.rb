class DashboardController < ApplicationController
  def convert_numeral_to_word
    information = request.raw_post
    data_parsed = JSON.parse(information)
    number =data_parsed['number'].to_i
    @return = number.humanize
    render json: @return
  end
end
