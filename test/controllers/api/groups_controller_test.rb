require 'test_helper'

class Api::GroupsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_groups_index_url
    assert_response :success
  end

  test "should get show" do
    get api_groups_show_url
    assert_response :success
  end

  test "should get create" do
    get api_groups_create_url
    assert_response :success
  end

  test "should get update" do
    get api_groups_update_url
    assert_response :success
  end

end
