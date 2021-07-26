<script>
export default {
  name: 'Tag',
  props: {
    text: {
      text: String,
      default: '',
      required: true
    }
  },
  render (h) {
    switch (this.text.toUpperCase()) {
      case 'CSS3':
        return <Badge text="CSS3" />
      case 'TODO':
        return <Badge text="TODO" type="warning" />
      default:
        return h()
    }
  }
}
</script>