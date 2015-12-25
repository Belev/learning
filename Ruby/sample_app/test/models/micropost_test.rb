require 'test_helper'

class MicropostTest < ActiveSupport::TestCase
  def setup
    @user = users(:user)
    @micropost = @user.microposts.build(content: "Test content")
  end

  test "should be valid" do
    assert @micropost.valid?
  end

  test "user should be present" do
    @micropost.user = nil
    assert_not @micropost.valid?
  end

  test "content should be present" do
    @micropost.content = "  "
    assert_not @micropost.valid?
  end

  test "content should be at most 140 characters" do
    @micropost.content = "a" * 141
    assert_not @micropost.valid?
  end
end
