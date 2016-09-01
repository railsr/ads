class AdSerializer < ActiveModel::Serializer
  include ActionView::Helpers::DateHelper
  attributes :id, :title, :description, :created

  def created
    time_ago_in_words(object.created_at) + " ago"
  end
end
