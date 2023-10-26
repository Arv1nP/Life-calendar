export default function About(){
    return(
      <div className="conclusion">
        <p>
        In this journey, the Life Calendar project has kindled our passion for understanding the relentless passage of time. It's a gentle reminder of the value of every fleeting moment and the importance of living life to the fullest. As we navigate this unending timeline, may it inspire us to embrace the present, chase our dreams, and cherish every week. The Life Calendar is a visual testament to the beauty of existence and an invitation to make each moment count.
        </p>
        <section className="ratingSection">
          <h3>Let us me know what you think about this concept.</h3>
          <form>
            <label>Rating:
              <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </label>
          </form>
        </section>
      </div>
    )
  }