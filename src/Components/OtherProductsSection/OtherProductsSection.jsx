import './otherProductsSection.scss';
import PrivacyPolicyGeneratorImage from '../../Assets/Images/privacy-policy-generator.svg';
import TermsConditionsGenerator from '../../Assets/Images/terms-conditions-generator.svg';
import DomainNameGeneratorImage from '../../Assets/Images/domain-name-generator.svg';
import InvoiceGeneratorImage from '../../Assets/Images/invoice-generator.svg';

function OtherProductsSection() {
  return (
    <div className='d-product'>
      <div className='d-container'>
        <h5 className='d-product__heading'>Try our other free products</h5>
        <div className='row my-5'>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3'>
            <img src={PrivacyPolicyGeneratorImage} />
            <h5 className='d-product__title mt-3 mb-2'>Privacy Policy Generator</h5>
            <p className='d-product__description'>
              Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
            </p>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3'>
            <img src={TermsConditionsGenerator} />
            <h5 className='d-product__title mt-3 mb-2'>Terms & Conditions Generator</h5>
            <p className='d-product__description'>
              Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
            </p>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3'>
            <img src={DomainNameGeneratorImage} />
            <h5 className='d-product__title mt-3 mb-2'>Domain Name Generator</h5>
            <p className='d-product__description'>
              Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
            </p>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3'>
            <img src={InvoiceGeneratorImage} />
            <h5 className='d-product__title mt-3 mb-2'>Invoice Generator</h5>
            <p className='d-product__description'>
              Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherProductsSection;
