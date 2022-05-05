class GreetingsController < ApplicationController
  def message
    @message = Message.all.sample.message

    respond_to do |format|
      format.json { render json: @message }
    end
  end
end
