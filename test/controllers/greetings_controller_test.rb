require "test_helper"

class GreetingsControllerTest < ActionDispatch::IntegrationTest
  test "should get message" do
    get greetings_message_url
    assert_response :success
  end
end
