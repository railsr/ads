class AdSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created_at
  belongs_to :user
end
