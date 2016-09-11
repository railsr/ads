module ApplicationHelper
  def gravatar(user)
    hash = Digest::MD5.hexdigest(user.email)
    image_src = "https://www.gravatar.com/avatar/#{hash}?s=32&d=identicon&r=PG"
  end
end
