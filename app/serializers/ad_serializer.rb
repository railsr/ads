class AdSerializer < ActiveModel::Serializer
  include ActionView::Helpers::DateHelper
  include ApplicationHelper
  attributes :id, :title, :description, :created, :usrgr

  def created
    time_ago_in_words(object.created_at) + " ago"
  end

  def usrgr
    gravatar(object.user)
  end
end
