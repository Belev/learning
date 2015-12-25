require 'test_helper'

class UsersEditTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:user)
  end

  test "edit with invalid user information" do
    log_in_as(@user)

    get edit_user_path(@user)
    assert_template 'users/edit'
    patch user_path(@user), user: { name: "",
                                    email: "test@test",
                                    password: "test",
                                    password_confirmation: "test" }
    assert_template 'users/edit'
  end

  test "edit with valid user information" do
    log_in_as(@user)

    get edit_user_path(@user)
    assert_template 'users/edit'

    name = "test"
    email = "test@test.com"

    patch user_path(@user), user: { name: name,
                                    email: email,
                                    password: "",
                                    password_confirmation: "" }
    assert_not flash.empty?
    assert_redirected_to @user
    @user.reload
    assert_equal @user.name, name
    assert_equal @user.email, email
  end
end
