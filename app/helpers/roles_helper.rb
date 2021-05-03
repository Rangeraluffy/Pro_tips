module RolesHelper
    def can_edit_tip?(tip)
      case current_user.role
      when 'admin' then true
      when 'registered' then tip.user == current_user
      else false
    end
  end

    def can_edit_user?(user)
      case current_user.role
      when 'admin' then true
      when 'registered' then user == current_user
      else false
    end
  end
end
