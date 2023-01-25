import BaseButton from '../common/BaseButton'

function Home() {

    function handleRegister(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        window.location.href = '/register';
    }

    function handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        window.location.href = '/auth'
    }

  return (
    <div className="main">
      <div className="container">
        <div className="column">
          <div>
            <img src="../assets/pngwing.png" alt="happy_duck" />
          </div>
        </div>
        <div className="column__context">
          <section className="context">
            <h1 className="main__header">Boost your skills</h1>
            <p className="main__text">
              kajdhfk akjdf akjdfk kajsdhf kajdhf akjdfkq asjhq kwjeh
            </p>
          </section>
          <div>
            <BaseButton onClick={(e) => handleRegister(e)}>
              Register
            </BaseButton>
            <BaseButton onClick={(e) => handleLogin(e)}>
              Login
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
