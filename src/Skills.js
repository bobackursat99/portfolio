import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
   
    <div id='skills' className="skills-section">
    <div className="skills-header">
     <h2>Skills</h2>   
     </div>
     <div className="skills-container">
       
      <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"     alt="" className="skills-icons"/>
        </div>
         <h3>HTML 5</h3>
        </div>
        
       </div>
       
       
        <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="" className="skills-icons"/>
        </div>
        <h3>CSS3</h3>
        </div>
       
       </div>
       
       
        <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="https://www.jeremysmola.com/wp-content/uploads/2019/04/logo-javascript-logo-png-transparent.png" alt="" className="skills-icons"/>
        </div>
        <h3>Javascript</h3>
        </div>
       
       </div>
       
          <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAz1BMVEX////hHyIAarQLb7YAbLXhHSAAabMAZ7P3x8fgGh3fAAD+9/f6/f7ztrbvkZPgCg/xmpzt9frgFBjgAAD/+/sAY7H50NDnUFLiJinE2+wAcrjfAAflQkX63t7gDxTi7vZWk8fQ4/D2vr9yn8z74uLkOTzxoqM5iMMdebvjMTTmSUvzra797+/o8vl0qdP62drtgIHqb3GpyuOCsteWvd3pXWDuiIrqZ2nte3y40+hYmcozhMGOu9zM4O8AXq/wlZenx+JGlspqptFilMboWFocqdA/AAAOSUlEQVR4nO1dCVfiShMlO4FgIMqWQBYEEpRFSUQT5JPh+f9/09dLyILoOE+YhH65xzlHA83pS3VX3eruqS6VChQoUKBAgQIFChQoUKBAgaxxk3UHzo7BIusenBuLNvFWvL7PugfnRqddzboLZ0a7Us66C2fGU+Uh6y6cGU/6KOsunBnv+mSadR/Oi45I9bPuw1lxc811yGZYrnCE27Auc51h1p04J6ptRZwQHfLLOqe8Z92Js+JZoeS3rDtxTrRkjtNJzp/ALKSUd5Kn4ZXMUfo4616cEWCMUuKIYM3WH4kUpRFswumdQlHKiNxZOH2WKYpTBln342yoQoKU/JJ1P86GYRt4GUq5I9bN9Ns6sKBIEbtEU54AghxXqWXdkXOhxikUR3H61ceXqiQM2+rqWgQGpOTV4SvT8sMDASJ1+qwDH0NxlZeD5fzW1aRTIyA6oikICT6kCPbrvcr1AwlD9J5SEEF9lSTYeuhUKm0SHGv1RRYhQVGuJ56Wn3RZp94IGKCl4RMM8yDQU4n9ptazrojaOwEeBnBBURCM0FE8HvuPms4pYp2ITcTaBE9B+SlaPayOJzLHyXetLPt1MtzjKchpj5HHHL7LIsdpzyS40FKpXkFRkNNjH3PfAZFRFAlJgcfYx3DXMZ8raFRRJiRBHOuhBSMnWn3RYPo0ISEIApRDC8qRBauPkKDYIcPHlBYT7GT0eHV7pcEHxOSHz0iKUvpTJFtqyO9UCHEypftrNEbFeDe734FGVZ6y7NUp0QvHaCzVHqDjIWeMlrEfVeIxuuiI0I8+EyHVAOoamoWJwHeFnlSIOe71iFadxEn8BK7mg1FLSKQold6R4Nbjtd+hyJHF8EkBJkyuHLYUDlK8JkSvlUovOnI0seMEDJFViTnPdo/kS0KfhQzFCSmnTCAhMCw/MKR0Yo4o9KCr0eNROuUwQ04mI/UFqRMcploi+rX3RnwkJOZPoWxLitBQA6SE3GXjHsZ8JV4PXXSwDclxNjcwfZITqdIjTqfAOCXlMM2QEikxsd+7CH0NlVyYumzAhajkpHuRQyNyCimHS1dyMgMuTfG6BlH+9F1PbYkO9P04JeaE8PBOSWpTeDY4NCIpEaPU50TlLvacN4/hVDy2m3+hWIzE5DiFJy8Rww/b+ZeLsqKIiZywpZFmQ0CRSv3/mEec/BN1qKYsVhIH2e6hACdGuIUoj65jk/VBqDhyqubCsVDiM8FTwFDUSckRI/R70TjtcxxH1izEGLb3IgbMw0/GqDQzLMuY/b1O/QRSYzaTUk+m+4jxoh8/QGvNbZX/X5NxTC/nJBtdzw1sO1ge72dfPzj5FeLVCVxvvmZpluWdrXTkHbmA4c9tWhCc+Sf0AJ7lo7lho4tISd2AZhmWDxrn6uJPMPNvHVZort3uF90bj36zuSZ5LMswwm3urChZgSPQLG9/bj2I8jcOInqAIcN7J+vaSSD5pgBHl7P9+n03x86xSY1GyuhSQDPgo3LlbiwbjizQLf8PG0qWv3WDX9v0sO7CDxP+9LPOCUulGQR2Z32rgdQwNpCa7ahs09keTtvGGlDk56fv6L+GL7CYIUOr9nxpGcasIQGEL8NfZ7OZAcL5Zrl1d8F67aiMIPAAAuMecUsm+Mbo4K9y+A2WDsuHJFleaDLqem0C3CL8A39dr9cqsFcT8qJByANBj2cc8HUYxz7PZPPGEASKwGkCk7BoPrIhaMAF/uz/Rq/QyHSsvdt2rU8igmTnjyHEzPfmpu0we2boH40MhlmCf8C2t3Nv+VXALMF5DSPi9u90+w8B5KhhdP3t9tV13TkepXPwq7v1tt0unp+//xSPh+P9e07rImE4+Rykp4MLAz6bbxM2fiIqfRhc+e2p+nIOWO7rDxhacIzyu9N15+SwAtb+QeoDCbL8PHeZRQxP5X+SFlhrGsxB93T9OTm8JjCBfVSoJCE1LN/beR8s5TMsw6/zpLkPgTQzyHzm/mZ2fKhCzQ2UARCmNM/uDt7jqiwtzH/7/WQJKRCwOOUZVXXsX7ud63me3+1uPe91vvsFkgmGBdoUqzuGV70Ex40t8Eywya7334Kx3ktwBstrXoiAZOv+VfwOQTD3Fmt4alMNupn2/ltouA7NJ2kcB84tTK8bZvKS7wiOm+8oH6Hh3zo0zafNlaDGgvSJVk13uYkdjWU6bjfHEeIDJAs4k7XDoySXDoETXscOQHJhpVVPw9tcEr0QMM0AbhM4GIxX4HF8lF1k3bMCBf4jkLo/SS/yD2m7Vi8ktP07GKbAql+LE+miPapkClB8u/4nCtrwt0B5X4I++wwzOhTfLOvYQHn7QHgj+MvX+S8HLZiyIIfIvcb+FJLJxxKNhso7/Atr70i/0UxwUUItgUR+kdCjRySq0DxMEC8Fs/nv0wswTNnAv1CCAIaLjhx8yo5l17vlhQ1Rw9psNlZsk0bXNR0w88JtGQb9wNRJEFT71ttclPUkY7mzVYFW10HKLpJhbd1g7TgqhuM462C+7Rpfs8tdqDQ8k2kKarC0Pum41DBCfK/vxi5PO/iSH4DAR//mAMYf4peZHyv6JtwatP2T9mjmqHlZT2zsaLhL9JM1/COw7GZeTgs1TCRW6FP2R9q4qmDmZR66oRqjzeVprDjzXVtoOl5eAom0jo6Y0Gqw/VGAa1j+drdm+GbTjvllPxk9eM5rL1LQ0ZHtxvpNrEsBhBFr43swZKosXBR3dgmf5edgC7FrqgmSWK44tnk7fwUZk2VZKAQmMIMPwHPf33ru/PYf20bMgOyhBdox3eQwaLh0HnagJGsbrNFSL9SgbJgv0Wx4zARoGMdOYA0fAHPT0QEbvLNB079cP3W2RtrazSAnDhXA6KITanCs0qm9F/Yj9l8DPnPDMGtzvj1cC4D+tCnkKOojSI2G0V2+ureBvVYZeLgL7TXxkbXo8CwUQLPJqms7mL9ChfqBh7U1VfDGHG9zA66zGZhqeDl/Z0YI4NK+5y39jTFrHFWokuHP12BqAxV4sQscn0KSjO3choeMaYExT6sCT4h/s0QoSbPN0pvbYOZBn0qrppfjldbGa7Dz/K71LdEFYmE3PETLIAcF5qgTeJ8dV8wLGnAi0QyMijs457rd7saKsIErih4IhYEJYrwKj6IKPN5YVIFTXRo5ZxdCMjZod5Th/4cghAdLobprNvdeVkBulWdVB3hVFzjVvIjt72MGxqAPj1/sbNNEoT4GdKw7JHzAiL4Mu30J6Riy7lSBAgUKFChwQixWCMRUQvyIsi4DkHurCqx4AavNaAXDC0bB8PLxn2DIEc+QfBv+5xjeTFu1+3q9Pq614hJmVYRUuY8b/Cz+e1iujZPtpqu3h0X2BfgPGFZbb0+TjqLLmiYrnd5bWApq2h5BpOpd3k/go/Di6mq5/j6hFFmTYbu7Ono6GDw9PP5FLseRYrhYjXRZEfdlAzlRFsO6ei+yCCAnS36sNPBEQSXAFg8jGbbj9u00Ctqu3Bqssq/Ll2K4qmB2HASuxKrhQi2D68MadDfPsKQZLrH/GLejwnbo0pYb9JMxUgxhlTIRWhEYR1fCosgo7cA1ksV2PExRBd6wKnStQsXtcOVITszL/Qkphi1Rq4xexoPWYlG+f8SXIOl4JiGLcUpcog1VoA/rCS+UI+2eM2BzDCmG1ce3RWylASoazE1Q/asxKq+bKC6EqnxyOnqx+nLVT7RDH5mbithfxcOxHF/+gGskK7FhriBD8eilwG+wHaflpPr+VwyHiBXOjqvoogSuE1VlRbUT9aPBAF+hIGcfChG+1DToOgsZl5jHBo3Kl0/vxE9ZVPFrOSml/CVD5C5lXMSzhXyk8h6+NETTkDvqMKvti2RYQiWSuU7oPwYV6rNpeCEMoeq8STF80WO/Ay8Nghb9OA1hu2neGU4H44fnu7sO1UExf8+wjD0rljXYTOkvBrfrUft2eWU4eATCWwfyZK/c9gyxiBF7aGCi4MFxicpm5US7PDNsvQPVxaWk6Z5heCkLdi41DbGNPqZ1p+tIeXNRwzwx5CKGNQVfLSNrSgcAsY8YIlah+kYXskWvAEGLRZ0Wtssbw8iGNQXdqsa918utfr8/HCU9TWmKBAAeprAVp+33Amo6atd5B9IUtFvkNh5O0bVx+l15n/KkfCm6HQne6TyEwRFy3d+ZgGvt671W2O4mt74UXW0o3sUp3QFDfJ8l1DhXMrrdOXy+gl5WaUdKO7fxEAkxTklEgAOGfXTLDAiCqCp7VGz/Bg3mxOZObhmi2zkS2voDwxukvsXRtAWltbivtd/HmWKcLOWWYesapYOJOuQHDLH65rR+PeVJywq6E/ESGFaQ8ExE8UOG+EYruf4uhh4HYYDWO+RLYKihaRavjtXS8bC0vx2wB8NGlGUAG1LpeXiP2+WPIaolH1+5MnyUU6oN4gFpUzTv5OibwAmv2Att2t+3ywnDgRgxDO+tUHq1abXaWnVk7gNDbC4K+5vo6R2+KqE3AO3KK0rOly69R73D8bBewZ2X9RH4B9SccjhKsfo+5D3WwnZKql1eGKIoXkHupXqH76viOCiiQT/foMtIcolutOKohEOa9tLt9DH8IvLCEC+/YIalRU+OlvQVrd0ChDguxbCm4eQhvQSVaieDds+gnZYThg84JdrvwLxMdFlRFF2m2jUQ0Fdcp6MkLzscTjoY6QM406uJjNppHdxO7HTEnDBsK2m3MaxdPT89PdyXkWAZtgBSV5EsWgiLw/2IYW0F241bn7TLDFP9YKGXOKzkPLm9M6CMgzWVjwF1BvTxGihxd+JEKE9CEUPIZY2HqI7RqgylTEg9evlWwdeIj45d50AEps8y1JJtUm4xPIJqT5cn4+yPEpwRi/c3YsNECKLtV6BAgQIFChQoUKBAgQIFyMH/AWNNadVidVgBAAAAAElFTkSuQmCC" alt="" className="skills-icons"/>
        </div>
        <h3>Java SE</h3>
        </div>
       
       </div>
       
          <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="" className="skills-icons"/>
        </div>
        <h3>React js</h3>


       
        </div>
        
       
       </div>
       
       <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="https://miro.medium.com/max/398/1*yjzfPF88FVJiMGsYv5ob3Q.png" alt="" className="skills-icons"/>
        </div>
        <h3>Git</h3>
        </div>
       
       </div>
       
       <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="" className="skills-icons"/>
        </div>
        <h3>C/C++ Programming</h3>
        </div>
       
       </div>

       <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png" alt="" className="skills-icons"/>
        </div>
        <h3>Python</h3>
        </div>
       
       </div>
       
       <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
  <img src="https://2.bp.blogspot.com/--Fqxd0ciPzc/WjbrtaCqurI/AAAAAAAACRE/CCjT5SN3xj8jWddVa3vx7HHDb_9jQAhcQCLcBGAs/s640/logo-oracle-database.png"     alt="" className="skills-icons"/>
        </div>
         <h3>Oracle Sql</h3>
        </div>
        
       </div>

       <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"     alt="" className="skills-icons"/>
        </div>
         <h3>Next js</h3>
        </div>
        
       </div>

       </div>
    
     </div>

    
  )
}

export default Skills