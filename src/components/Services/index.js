import React from "react";
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from "./ServicesElements";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>
				<ServicesWrapper>
					<ServicesCard>
						<ServicesIcon src={Icon1} />
						<ServicesH2>Reduce Expenses</ServicesH2>
						<ServicesP>
							We help you reduce your fees and increase your revenue.
						</ServicesP>
					</ServicesCard>

					<ServicesCard>
						<ServicesIcon src={Icon2} />
						<ServicesH2>Virtual Offices</ServicesH2>
						<ServicesP>
							Access our services from anywhere in the world.
						</ServicesP>
					</ServicesCard>

					<ServicesCard>
						<ServicesIcon src={Icon3} />
						<ServicesH2>Premium Benefits</ServicesH2>
						<ServicesP>Unlock more with our Membership plans.</ServicesP>
					</ServicesCard>
				</ServicesWrapper>
			</ServicesH1>
		</ServicesContainer>
	);
};

export default Services;
