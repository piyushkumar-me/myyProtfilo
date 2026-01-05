import React from "react";
import ConatactContanet from "./ConatactContanet";
import ConatactFrom from "./ConatactFrom";
import AnimatedContent from "@/components/AnimatedContent";

function Contact() {
    return (
        <div className="w-full min-h-screen text-white px-4 pt-28 pb-16">
            <div className="max-w-6xl mx-auto">
  
                <AnimatedContent
                    distance={80}
                    direction="vertical"
                    duration={3}
                    animateOpacity
                >
                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        
                        <ConatactContanet/>

                        <ConatactFrom/>
                        
                       

                    </div>
                </AnimatedContent>

            </div>
        </div>
    );
}

export default Contact;
