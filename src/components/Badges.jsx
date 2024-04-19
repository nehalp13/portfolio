import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { badges } from '../constants'

const BadgeCard = ({ index, title, icon, badge_link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-white-200 p-[1.5rem] rounded-3xl xs:w-[320px] w-full"
  >
    <div className='mt-1'>
      <div className="flex justify-center" >
        <motion.img
          whileHover={{ scale: 1.2 }}
          src={icon}
          alt='web-development'
          className='w-23 h-23 object-contain cursor-pointer card-img_hover'
          onClick={() => window.open(badge_link, "_blank")}
        />
      </div>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <h3 className='text-[#01061a] text-[20px] font-bold text-center'>
            {title}
            </h3>
        </div> 
      </div>
    </div>
  </motion.div>
)

const Badges = () => {
  return (
    <div className="mt-5 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Badges I have earned</p>
          <p className={styles.sectionHeadText}>Certifications.</p>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}>
        {badges.map((badge, index) => (
          <BadgeCard
            key={badge.title}
            index={index}
            {...badge}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Badges, "certificates");