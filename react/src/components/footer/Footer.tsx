function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="container-fluid bg-body-tertiary px-3 pt-2">
      <p className="fw-lighter fs-sm mb-2 text-center">
        &copy; Copyright&nbsp;&nbsp;2021-{currentYear}
        {' '}Keri Informatics, Makó
      </p>
    </div>
  )
}

export default Footer