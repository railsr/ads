class AdSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created_at
end
