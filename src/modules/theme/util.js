import Color from 'color';

export function alpha(value, alpha) {
  return Color(value).alpha(alpha).string();
}