import React from 'react'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import { projectData, processSteps, faqs } from '../Data/data'
import ProcessStep from '../components/Services/ProcessStep'
import FaqItem from '../components/Services/FaqItem'
import { Link } from 'react-router-dom'

const Services = () => {

  return (
    <div className="min-h-screen bg-secondary text-white">
      {/* Hero Section */}
      <section className="relative pt-2 sm:pt-20 md:pt-24 lg:pt-32 px-4 sm:px-6 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-primary/30">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Our Services</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Ideas Into
              <span className="block text-primary mt-2">Digital Reality</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions tailored to your needs. From cutting-edge development to creative design, we've got you covered.
            </p>
            
           
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-8xl">
            {/* <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                What We <span className="text-primary">Offer</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                Explore our range of professional services designed to help you succeed
              </p>
            </div> */}

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {projectData.map((service) => (
              <div
                key={service.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-primary/60">
                    {String(service.id).padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Professional {service.title.toLowerCase()} services tailored to meet your specific requirements and goals.
                </p>
                
                <a href="#contact" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-primary/10 hover:bg-primary text-primary hover:text-secondary border border-primary/30 hover:border-primary rounded-lg font-semibold transition-all duration-300 group-hover:scale-105">
                  <span className="text-xs sm:text-sm">Buy Now</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white/5">
        <div className="container mx-auto max-w-8xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.id}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white/5">
        <div className="container mx-auto max-w-8xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-3 text-primary sm:space-y-4">
            {faqs.map((faq) => (
              <FaqItem 
                key={faq.id}
                faq={faq}
              />
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}

export default Services