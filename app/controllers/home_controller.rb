class HomeController < ApplicationController
  def index
    @tips = Tip.most_recent_active
  end
end
