from django import template
register = template.Library()
@register.filter
def split(value, sep):
    if value is None: return []
    return [s.strip() for s in str(value).split(sep) if s.strip()]
@register.filter
def get(d, key):
    if not d: return []
    if hasattr(d, 'get'): return d.get(key, [])
    return []
